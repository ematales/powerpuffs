export default function Home() {
    return (
        <div>
            {/* <head> */}
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* <title>ur mom</title>
                                <!-- take out style if you don't want the map -->
                                <style>
                                    #map{
                                        height: 400px;
                                    width: 100%;
        }
                                </style> */}
            {/* </head> */}
            {/* <body> */}

            {/* <div id="map1"></div>
                                <div id="map"></div> */}
            {/* amy you should probably make ur own key
                                https://www.youtube.com/watch?v=uINleRduCWM
                                https://developers.google.com/maps/documentation/javascript/get-api-key */}
            {/* </body> */}

            <div className="bg-bg bg-cover h-screen w-screen">
                <img className="flex m-auto h-1/3 pt-10" src={"/craving1.png"}></img>
                <div className="p-10">
                    <input className="flex m-auto w-1/4 text-2xl p-2 raleway" name="foodOrDrink" id="foodOrDrink" placeholder="ex. bubble tea, korean food..."></input>
                </div>
                <div className="flex m-auto raleway text-xl items-center justify-center p-2">
                    <label>Max distance:</label>
                    <select name="distance" id="distance">
                        <option value="500">0.5km</option>
                        <option value="1000">1km</option>
                        <option value="2000">2km</option>
                        <option value="5000">5km</option>
                        <option value="10000">10km</option>
                    </select>
                </div>
                <div className="flex m-auto raleway text-xl items-center justify-center p-2">
                    <label>Min rating:</label>
                    <select name="ratingUser" id="ratingUser">
                        <option value="4">⭐️⭐️⭐️⭐️</option>
                        <option value="3">⭐️⭐️⭐️</option>
                        <option value="2">⭐️⭐️</option>
                        <option value="1">⭐️</option>
                    </select>
                </div>
                {/* <form action="">
                                    <select id="distancefg">
                                        <option value="" selected disabled hidden>pick</option>
                                        <option value="500">500</option>
                                        <option value="1000">1000</option>
                                        <option value="2000">2000</option>
                                        <option value="5000">5000</option>
                                        <option value="10000">10000</option>
                                    </select>
                                </form> */}

                {/* <form action="">
                                    <select id="ratingUser">
                                        <option value="" selected disabled hidden>pick</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </form> */}
                <div className="pt-8">
                    <button className="flex m-auto rounded-full h-48 w-48 items-center justify-center p-2 border raleway text-2xl" style={{ background: "#CAEDFF" }}>PRESS THE<br />NOM BUTTON</button>
                </div>
                <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOURKEYHERE&libraries=places"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            </div>
        </div>
    );
}