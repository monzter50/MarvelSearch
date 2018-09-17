import React, {Component, Fragment} from 'react';
import './App.css';
import  MD5 from './md5/md5';
import  {hash} from './md5/hash';
import Card from './components/Card';
import Search from './components/Search';
const privateKey ="457456a87fee270cdd14a66fba297583c68cc0ae",
publicKey ="1861cffafdb4e3be24458342cfc915e9";
const ts = Date.now();
const hash2 = MD5(ts + privateKey + publicKey);

console.log(hash);

class App extends Component {
	constructor(props){
		super(props);
		this.state= {
            flag: true,
            data:[],
            status:null,
            loading: true
		}
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
    }
    componentWillMount() {
	    console.log("willMount");
        let name = null;
        const URL = `http://gateway.marvel.com/v1/public/characters?name=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash2}`;
        fetch(URL)
            .then(results => {
                return results.json()
            })
            .then( data => {
                // console.log(results)
                this.setState({data:data.data.results,status:data.data.count});
                console.log(this.state.status);
            });
	}
    getCharaptersMarvel=(e)=>{
	    console.log(e.type);
        let name = document.getElementById("search").value;
        const formSearch = document.querySelector("#formSearch");
        const founds = document.querySelector("#found");
        const URL = `http://gateway.marvel.com/v1/public/characters?name=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash2}`;
        fetch(URL)
            .then(results => {
                return results.json()
            })
            .then( data => {
                this.setState({data:data.data.results,status:data.code});
                if(this.state.data.length>0){
                    formSearch.classList.add("hidden");
                    founds.classList.add("hidden");
                }
                console.log(data);
            });

    }

	handleClose=(e)=> {
	    console.log("click close");
        const formSearch = document.querySelector("#formSearch");
        const founds = document.querySelector("#found");
        formSearch.classList.remove("hidden");
        this.setState({
            data:[],
            status:0
        });
    }

	render() {
        const { loading } = this.state;

        if(loading) { // if your component doesn't have to wait for an async action, remove this block
            return <div className={"App"}><div className={"loader"}></div></div>; // render null when app is not ready
        }
		return (
            <React.Fragment>
                <section className="App">
                 <Search
                     getCharaptersMarvel={this.getCharaptersMarvel}
                 />
                        {
                            this.state.status ===0? <div id={"found"} className={"not-founds"}><h1>Nothing</h1></div> :(
                                (this.state.data.length>0 )? this.state.data.map(items =>{
                                    return (
                                     <Card
                                         path ={items.thumbnail.path}
                                        extension={items.thumbnail.extension}
                                        name={items.name}
                                        description={items.description}
                                         handleClose={this.handleClose}
                                     />

                                    )
                                }):<div id={"found"} className={"not-founds"}> <h1>Not found </h1></div>
                            )
                        }

                </section>

            </React.Fragment>
		);
	}
}

export default App;
