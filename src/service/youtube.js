class Youtube{
    constructor(key){
        this.key = key;
        this.base = "https://www.googleapis.com/youtube/v3";
    }
    getPopular = async () => {
      const res = await fetch(`${this.base}/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=${this.key}`);
      const data = await res.json();
      const items = data.items;
      return items;
    };
    
    getSearchResult = async (query) => {
      const res = await fetch(`${this.base}/search?part=snippet&q=${query}&type=video&maxResults=25&regionCode=kr&key=${this.key}`);
      const data = await res.json();
      const items = data.items.map(item => {
        return {...item, id:item.id.videoId};
      });
      return items;
    }
}

export default Youtube;
