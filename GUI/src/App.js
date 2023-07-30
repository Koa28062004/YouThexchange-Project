
import './App.css';
function Tool() { // Hàm trả về thanh điều hướng 
    return(
        <div className="tool">
            <div className="nav">
                <img className="logo" alt="hi"src="logo.png"/>
                <div className="ull">
                    <div className="dropdown">
                        Event
                        <div className="dropdown-content">
                            <div className="content">
                                <a href="https://www.youtube.com/">youtube</a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">Competition
                        <div className="dropdown-content"> 
                            <div className="content">
                                <a href="https://www.youtube.com/">youtube</a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">Program
                        <div className="dropdown-content">
                            <div className="content">
                                <a href="https://www.youtube.com/">youtube</a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">About Us
                        <div className="dropdown-content">
                            <div className="content">
                                <a href="https://www.youtube.com/">youtube</a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">Project Partners
                        <div className="dropdown-content">
                            <div className="content">
                                <a href="https://www.youtube.com/">youtube</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search">
                <input className="inputt" type="search" name="" placeholder="Search..."/>
                <button className="ser">Search</button>
            </div>
        </div>
    )
}

function Footer() {
    return(
        <div className="footer">
            <div className="logo_f">
                <img src="footer_logo.PNG" alt=""></img>
            </div>
            <div className="infor">
                More
            </div>
            <div className="infor">
                More
            </div>
        </div>
    )
}

function Homepage() { 
  return (
    <div className="App">
        <h1 >HOME PAGE</h1>
        <Tool/>
        <div className="main">
            <div className="exchange">
                <div className="pre">
                    <button className='pre_btn' >
                            pre
                    </button>
                </div>

                <div className="next">
                    <button className='next_btn'>
                        next
                    </button>
                </div>
            </div>

            <div className="gallery">
                <div className="slide">
                    <img src="background.PNG" alt=""/>
                </div>

                <div className="slide">
                    <img src="hinh1.jpg" alt=""/>
                </div>

                <div className="slide">
                    <img src="hinh2.jpg" alt=""/>
                </div>

                <div className="slide">
                    <img src="hinh3.jpg" alt=""/>
                </div>

                <div className="slide">
                    <img src="background.PNG" alt=""/>
                </div>

                <div className="slide">
                    <img src="hinh1.jpg" alt=""/>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Homepage;
