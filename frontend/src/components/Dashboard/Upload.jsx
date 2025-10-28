"use client"
import { useState } from "react"
import { FaRegSquarePlus } from "react-icons/fa6"
import { BiTrashAlt } from "react-icons/bi"
import { Loader2 } from "lucide-react"

export default function Upload() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [chat, setChat] = useState([])
  const [loading, setLoading] = useState(false)

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0]
    setFile(selected || null)
    if (selected) {
      setPreview(URL.createObjectURL(selected))
    } else {
      setPreview(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) {
      setChat((prev) => [
        ...prev,
        { role: "bot", message: "⚠️ Please select an image before submitting." },
      ])
      return
    }

    setChat((prev) => [...prev, { role: "user", message: `📤 Uploaded: ${file.name}` }])
    setLoading(true)

    const formData = new FormData()
    formData.append("image", file)

    try {
      const res = await fetch("https://binbuddy-1c62.onrender.com/api/v1/classify-waste", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) throw new Error("Failed to classify image.")
      const data = await res.json()
      const label = data.label || data.classification || "🗑️ Unknown"

      setChat((prev) => [
        ...prev,
        { role: "bot", message: `🤖 BinBuddy says: This item is classified as: ${label}` },
      ])
    } catch (err) {
      setChat((prev) => [
        ...prev,
        { role: "bot", message: "❌ Error: Unable to classify image. Please try again." },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-3 rounded-xl">
            <BiTrashAlt className="text-green-700 text-2xl" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Classify Waste</h2>
            <p className="text-gray-500 text-sm">
              Upload an image to let BinBuddy detect its waste category.
            </p>
          </div>
        </div>
      </div>

      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upload Zone */}
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-full h-[18rem] border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition relative"
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="flex flex-col items-center">
              <FaRegSquarePlus className="text-4xl text-green-600 mb-2" />
              <p className="text-gray-500 text-sm">Click or drag image to upload</p>
            </div>
          )}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Chat + Button */}
        <div className="flex flex-col justify-between h-full">
          <div className="bg-gray-50 rounded-xl p-4 h-[12rem] overflow-y-auto border border-gray-100">
            <h3 className="text-sm font-medium text-gray-600 mb-2">BinBuddy Chat</h3>
            {chat.length === 0 ? (
              <p className="text-gray-400 italic">No messages yet...</p>
            ) : (
              chat.map((entry, idx) => (
                <div
                  key={idx}
                  className={`mb-2 p-2 rounded text-sm ${
                    entry.role === "user"
                      ? "bg-green-100 text-green-800"
                      : "bg-white text-gray-700 border-l-4 border-green-400"
                  }`}
                >
                  {entry.message}
                </div>
              ))
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition font-medium"
          >
            {loading && <Loader2 className="animate-spin w-4 h-4" />}
            {loading ? "Classifying..." : "Upload & Classify"}
          </button>
        </div>
      </form>
    </section>
  )
}
