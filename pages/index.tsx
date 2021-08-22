export default function Home() {
    return (
        <>
            <div className="bg-bg bg-cover h-screen w-screen">
                <img className="flex m-auto h-1/3 pt-10" src={"/craving1.png"}></img>
                <div className="p-10">
                    <input className="flex m-auto w-1/4 text-2xl p-2 raleway" name="foodOrDrink" id="foodOrDrink" placeholder="ex. bubble tea, korean food..."></input>
                </div>
                <div className="flex m-auto raleway text-xl items-center justify-center p-2">
                <label>Max distance:</label>
                <select name="distance" id="distance">
                    <option value="halfkm">0.5km</option>
                    <option value="onekm">1km</option>
                    <option value="twokm">2km</option>
                    <option value="fivekm">5km</option>
                    <option value="tenkm">10km</option>
                </select>
                </div>
                <div className="flex m-auto raleway text-xl items-center justify-center p-2">
                <label>Min rating</label>
                <select name="rating" id="rating">
                    <option value="4star">⭐️⭐️⭐️⭐️</option>
                    <option value="3star">⭐️⭐️⭐️</option>
                    <option value="2star">⭐️⭐️</option>
                    <option value="1star">⭐️</option>
                </select>
            </div>
            <div className="pt-8">
                    <button className="flex m-auto rounded-full h-48 w-48 items-center justify-center p-2 border raleway text-2xl" style={{background: "#CAEDFF"}}>PRESS THE<br/>NOM BUTTON</button>
                </div>
            </div>
        </>
    );
}