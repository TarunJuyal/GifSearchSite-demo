const urls={
    search(query,limit){
        let imageurl =`http://api.giphy.com/v1/gifs/search?api_key=sgBtkZIV4VsLcu3Tw2xOx6Q9XsPK0nIB&q=${query}&limit=${limit}`;
        return imageurl; 
    }
}
