import { FaTrash } from 'react-icons/fa6'
const Home = () => {
    return (

            <section className="bg-white p-6 rounded-xl shadow-md my-10">
            {/* Waste Classification Upload */}

                <div className="flex items-center mb-4">
                    <FaTrash className="text-green-700 mr-2 text-2xl" />
                    <h2 className="text-xl font-semibold text-green-700">Classify Waste</h2>
                </div>
                <p className="text-gray-600 mb-4">
                    Upload an image of a waste item and let BinBuddy classify it as recyclable, compostable, or landfill.
                </p>
                <form className="space-y-4">
                    <input
                        type="file"
                        accept="image/*"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Upload & Classify
                    </button>
                </form>
            </section>
    )
}

export default Home
