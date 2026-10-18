function MovieButton() {
    function SupriseMe() {
        console.log("Surprise Me button clicked!");
    }
    return (
        <>
            <button onClick={SupriseMe}>
                Surprise Me!
            </button>
        </>
    )
}
export default MovieButton;