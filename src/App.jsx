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

  const randomArrayItem = (array) => array[Math.trunc(Math.random() * array.length-1)];

  useEffect(() => {
    const loadTmdbData = async () => {
      const tmdbData = await tmdbRequest.getHomeList();
      
      const delay = 1000;
      setTimeout(() => setCategoryList(tmdbData), delay);

      //-------------------------------------------------------------------
      
      const netflixMovies = tmdbData[0]["items"];
      const featuredContent = randomArrayItem(netflixMovies);
      const { id: contentId } = featuredContent;
      const featuredContentCompleteInfo = await tmdbRequest.getContentById(contentId, "tv");

      setfeatureMovieData(featuredContentCompleteInfo);
    }
    loadTmdbData()
  }, [])

  useEffect(() => { // A cada atualização.
    function scrollListenerFunc() {
      const scrollValue = window.scrollY;

      if(scrollValue > 50) return setblackHeader(true);
      return setblackHeader(false);
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
        featureMovieData && <FeaturedMovie content={featureMovieData}/> // Retorna um valor caso true ou nada caso false.
      }


      <section className='catefories-area'>
        {
          !categoryList || categoryList.length === 0 ? <img width="600" src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Loading..." className='loading_gif' /> : categoryList.map(category => {
            const { title, items } = category;
            return <CategoryComponent categoryTitle={title} categoryMovies={items} key={idUniqueV2()} />;
          })
        }
      </section>
      <footer>Todos Direitos de Imagens Reservados á Netflix</footer>
    </div>
  );
}

export default App;
