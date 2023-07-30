
import './App.css';
function Homepage() {
  return (
    <div className="App">
       <h1 >HOME PAGE</h1>
    <div class="tool">
        <div class="nav">
            <img class="logo" alt="hi"src="logo.png"/>
            <div class="ull">
                <div class="dropdown">
                    Event
                    <div class="dropdown-content">
                        <a href="https://www.youtube.com/">youtube</a>
                    </div>
                </div>
                <div class="dropdown">Competition
                    <div class="dropdown-content">
                        <a href="https://www.youtube.com/">youtube</a>
                    </div>
                </div>
                <div class="dropdown">Program
                    <div class="dropdown-content">
                        <a href="https://www.youtube.com/">youtube</a>
                    </div>
                </div>
                <div class="dropdown">About Us
                    <div class="dropdown-content">
                        <a href="https://www.youtube.com/">youtube</a>
                    </div>
                </div>
                <div class="dropdown">Project Partners
                    <div class="dropdown-content">
                        <a href="https://www.youtube.com/">youtube</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="search">
            <input class="inputt" type="search" name="" placeholder="Search..."/>
            <button class="ser">Search</button>
        </div>
    </div>
    <div class="main">
        <div class="exchange">
            <div class="pre">
               <button className='pre_btn' >
                    pre
               </button>
            </div>
            <div class="next">
                <button className='next_btn'>
                    next
                </button>
            </div>
        </div>
        <div class="gallery">
        <div class="slide">
                <img src="background.PNG" alt=""/>
            </div>
            <div class="slide">
                <img src="hinh1.jpg" alt=""/>
            </div>
            <div class="slide">
                <img src="hinh2.jpg" alt=""/>
            </div>
            <div class="slide">
                <img src="hinh3.jpg" alt=""/>
            </div>
            <div class="slide">
                <img src="background.PNG" alt=""/>
            </div>
            <div class="slide">
                <img src="hinh1.jpg" alt=""/>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Homepage;
