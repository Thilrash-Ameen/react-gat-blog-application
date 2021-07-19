function Homepage() {
    const handleClick = () => {
        console.log('Hello Thilrash, You Clicked Button!');
    }

    return(
        <div>
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Homepage;