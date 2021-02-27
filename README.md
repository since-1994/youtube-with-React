# clone YouTube for learning react

## what i learned

### useState

function Component에서 class Component처럼 state를 사용하기 위해서 useState를 사용했습니다.

- 예시
  ```javascript
  const [videos, setVideos] = useState([]);
  ```

### useRef

function Component에서 class Component처럼 `React.createRef()`를 사용하기 위해 useRef를 사용했습니다.

- 예시

  ```javascript
  import { useRef } from "react";
  const NavBar = ({ search }) => {
    const inputRef = useRef();
    const onSubmit = (e) => {
      e.preventDefault();
      search(inputRef.current.value);
    };
    return (
      <nav className={styles.nav}>
        <form onSubmit={onSubmit}>
          <input ref={inputRef} type="text" />
        </form>
      </nav>
    );
  };
  ```

### memo

class PureComponent처럼 function Component에서 state나 props의 변화가 없을 때 re-render되는 것을 막기 위해 memo를 사용해보았습니다.

## what i solved

### 1. MVC design pattern을 위해 `App Component`에서 youtube api를 통해 data를 받아오는 과정을 class를 만들어 분리시켰습니다.

- before(app.jsx)

  하나의 component에 많은 기능이 담겨 있어 관리하기가 어렵습니다.

  ```javascript
  import NavBar from "./components/nav_bar/nav_bar";
  import VideoDetail from "./components/video_detail/video_detail";
  import VideoList from "./components/video_list/video_list";
  import styles from "./app.module.css";

  function App(props) {
    const key = key;
    const base = "https://www.googleapis.com/youtube/v3";

    const [videos, setVideos] = useState([]);

    const getPopular = async () => {
      const res = await fetch(
        `${base}/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=${key}`
      );
      const data = await res.json();
      const items = data.items;
      setVideos(items);
    };

    useEffect(getPopular, []);

    const onSubmit = async (query) => {
      const res = await fetch(
        `${base}/search?part=snippet&q=${query}&type=video&maxResults=25&regionCode=kr&key=${key}`
      );
      const data = await res.json();
      const items = data.items.map((item) => {
        return { ...item, id: item.id.videoId };
      });
      setVideos(items);
    };

    return (
      <div>
        <NavBar search={onSubmit} goHome={getPopular} />
        <VideoList videos={videos} videoDetail={videoDetail} />
      </div>
    );
  }

  export default App;
  ```

- after(youtube.js)

  ```javascript
  class Youtube {
    constructor(key) {
      this.key = key;
      this.base = "https://www.googleapis.com/youtube/v3";
    }
    getPopular = async () => {
      const res = await fetch(
        `${this.base}/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=${this.key}`
      );
      const data = await res.json();
      const items = data.items;
      return items;
    };

    getSearchResult = async (query) => {
      const res = await fetch(
        `${this.base}/search?part=snippet&q=${query}&type=video&maxResults=25&regionCode=kr&key=${this.key}`
      );
      const data = await res.json();
      const items = data.items.map((item) => {
        return { ...item, id: item.id.videoId };
      });
      return items;
    };
  }

  export default Youtube;
  ```

### 2. 동일한 component를 다른 페이지에서 사용하기 위해 css에 관한 설정을 props를 통해 넘겨주었습니다.
