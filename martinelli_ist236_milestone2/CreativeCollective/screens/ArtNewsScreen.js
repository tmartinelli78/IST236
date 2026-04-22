import List from "../components/Lists/NewsList"
import { NEWS } from "../data/news_data";

function  ArtNewsScreen() {
  const type = "Art News";
  const displayedNews = NEWS.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <List items={displayedNews} />;
}

export default ArtNewsScreen;
