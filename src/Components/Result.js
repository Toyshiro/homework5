function Result({resValue, isError}){

    let resStyle = {
        fontColor: "black",
        borderColor: "black",
        border: "solid",
        marginTop: "50px"
    };

    let errorStyle = {
        fontColor: "red",
        borderColor: "red",
        border: "solid",
        marginTop: "50px"
    };

    return(<div style={isError ? errorStyle : resStyle}>{resValue} err:{isError}</div>);
}
export default Result;