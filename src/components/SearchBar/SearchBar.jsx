import './SearchBar.css';
import { IoSearchOutline } from "react-icons/io5";


export default function SearchBar(){
    return(
        <section className="search-bar">
                    <div className="search">
                        {IoSearchOutline && < IoSearchOutline className="ion-icon" />}
                        <input type="text" id="search-input" placeholder="Search the website.."/>
                    </div>

                    <div className="sort-filter">
                        <div className="dropdown" >
                            <label for="sort-by" className="labels">Sort by:</label>
                            <div>
                                <select id="sort-by">
                                    <option value="default">Default</option>
                                    <option value="topic">Topic Title</option>
                                    <option value="author">Author Name</option>
                                </select>
                            </div>
                        </div>

                        <div className="dropdown filter-by" >
                            <label for="filter-by" className="labels">Filter by:</label>
                            <div>
                                <select id="filter-by">
                                    <option value="all">All Categories</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
    );
}