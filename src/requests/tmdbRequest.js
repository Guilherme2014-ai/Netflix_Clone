import axios from "axios";
import tmdbConfig from "../config/tmdbConfig";

const { baseUrl, tmdb_apiKey, lang } = tmdbConfig;

const genresIds = {
    action: 28,
    originalsNetflix: 213,
    comedy: 35,
    horror: 27,
    romance: 10749,
    documentary: 99
}

const urlConfig = `api_key=${tmdb_apiKey}&language=${lang}`

const tmdbRequests = {
    async getHomeList() {
        const categoriesList = [

            {
                slug: "netflix_originals",
                title: "Originais da Netflix",
                url: `/discover/tv?with_network=${genresIds.originalsNetflix}&`
            },
            {
                slug: "trending",
                title: "Recomendados para você",
                url: `/trending/all/week?`
            },
            {
                slug: "toprated",
                title: "Em Alta",
                url: `/movie/top_rated?`
            },

            {
                slug: "action",
                title: "Ação",
                url: `/discover/movie?with_genres=${genresIds.action}&`
            },
            {
                slug: "comedy",
                title: "Comédia",
                url: `/discover/movie?with_genres=${genresIds.comedy}&`
            },
            {
                slug: "horror",
                title: "Terror",
                url: `/discover/movie?with_genres=${genresIds.horror}&`
            },
            {
                slug: "romance",
                title: "Romance",
                url: `/discover/movie?with_genres=${genresIds.romance}&`
            },
            {
                slug: "documentary",
                title: "Documentários",
                url: `/discover/movie?with_genres=${genresIds.documentary}&`
            },
        ]
        const categoryUrlRequest = (await Promise.all(categoriesList.map(category => axios.get(`${baseUrl}${category.url}${urlConfig}`)))).map(res => res["data"]["results"]);

        const categoriesListWithInfos = () => {
            const newCategoryList = [];

            for (let i = 0; i < categoriesList.length; i++) {
                const currentCategory = categoriesList[i];
                const currentInfoCategory = categoryUrlRequest[i];

                newCategoryList.push(
                    {
                        ...currentCategory,
                        items: currentInfoCategory
                    }
                );
            }

            return newCategoryList;
        };

        return categoriesListWithInfos();
    },
    async getContentById(id, type) {
        const url = `${baseUrl}/${type}/${id}?${urlConfig}`;

        const res = await axios.get(url);
        
        console.log(`url: ${url}`);
        console.log(res);
        return res;
    }
};

export default tmdbRequests;

