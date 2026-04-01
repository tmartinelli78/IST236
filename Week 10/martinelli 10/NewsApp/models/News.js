class News {
  constructor(
    newsId,
    headline,
    date,
    author,
    agency,
    imageUrl,
    description,
    type,
  ) {
    this.id = newsId;
    this.headline = headline;
    this.date = date;
    this.author = author;
    this.agency = agency;
    this.description = description;
    this.imageUrl = imageUrl;
    this.type = type;
  }

  toString() {
    return `${this.id} ${this.headline}, ${this.date}, ${this.author} ${this.agency} Description: ${this.description} - Image URL: ${this.imageUrl}`;
  }
}

export default News;
