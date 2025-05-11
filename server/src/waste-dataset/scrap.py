import os
from icrawler.builtin import GoogleImageCrawler

def create_folder(folder):
    if not os.path.exists(folder):
        os.makedirs(folder)

def scrape_category(query, folder, max_num=100):
    create_folder(folder)
    print(f"📸 Scraping '{query}' into '{folder}'")
    
    crawler = GoogleImageCrawler(storage={'root_dir': folder})
    crawler.crawl(keyword=query, max_num=max_num)

def scrape_multiple_categories(categories, base_folder="dataset", images_per_class=50):
    for label in categories:
        label_folder = os.path.join(base_folder, label.replace(" ", "_"))
        scrape_category(label, label_folder, max_num=images_per_class)

# Define your classes here
categories = [
    "plastic waste",
    "food waste",
    "glass bottles",
    "metal cans",
    "paper waste",
    "e-waste"
]

# Run the scraper
scrape_multiple_categories(categories, base_folder="waste_dataset", images_per_class=50)
