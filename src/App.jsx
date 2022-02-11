import { useEffect, useState } from 'react';
import './App.css';

import tmdbRequest from "./requests/tmdbRequest";

import CategoryComponent from "./components/CategoryComponent";
import { idUniqueV2 } from 'id-unique-protocol';
import FeaturedMovie from './components/FeaturedMovie';
import HeaderComponent from './components/HeaderComponent';

function App() {

  const [ categoryList, setCategoryList ] = useState([]);
  const [ featureMovieData, setfeatureMovieData] = useState(null);
  const [ blackHeader, setblackHeader ] = useState(false);

  useEffect(() => {
    const loadTmdbData = async () => {
      const tmdbData = await tmdbRequest.getHomeList();
      setCategoryList(tmdbData);

      //-------------------------------------------------------------------
      
      const netflixMovies = tmdbData[0]["items"];
      const randomNum = Math.trunc(Math.random() * netflixMovies.length-1);
      const featuredContent = netflixMovies[randomNum];
      const contentId = featuredContent["id"];
      const featuredContentCompleteInfo = await tmdbRequest.getContentById(contentId, "tv");
      setfeatureMovieData(featuredContentCompleteInfo);

      console.log(featuredContent,featuredContentCompleteInfo);
      console.log(tmdbData);
    }
    loadTmdbData()
  }, [])

  useEffect(() => {
    function scrollListenerFunc() {
      const scrollValue = window.scrollY;

      if(scrollValue > 50) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    }

    window.addEventListener("scroll", scrollListenerFunc);

    return () => {
      window.removeEventListener("scroll", scrollListenerFunc);
    };
  }, []);

  return (
    <div className="App">
      <HeaderComponent blackHeader={blackHeader}/>
      
      {
        featureMovieData && <FeaturedMovie content={featureMovieData}/> // Interensante.
      }
      <section className='catefories-area'>
        {categoryList.map(category => {
          const { title, items } = category;
          return <CategoryComponent categoryTitle={title} categoryMovies={items} key={idUniqueV2()} />;
        })}
      </section>
    </div>
  );
}

export default App;
