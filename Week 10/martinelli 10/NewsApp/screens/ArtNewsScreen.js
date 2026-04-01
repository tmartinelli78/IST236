import List from "../components/Lists/List"
import { NEWS } from "../data/dummy_data";

function  ArtNewsScreen() {
  const type = "Art News";
  const displayedNews = NEWS.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <List items={displayedNews} />;
}

export default ArtNewsScreen;
