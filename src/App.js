import React, {Component, Fragment} from 'react';
import './App.css';
import  MD5 from './md5/md5';
import  {hash} from './md5/hash';
import Card from './components/Card';
import Search from './components/Search';
const privateKey ="", // Replace with your private Key
publicKey ="1861cffafdb4e3be24458342cfc915e9";
const ts = Date.now();
const hash2 = MD5(ts + privateKey + publicKey);

console.log(hash);

class App extends Component {
	constructor(props){
		super(props);
		this.state= {
            success: false,
            data:[],
            words:'',
            status:null,
            error:false,
            loading: true,
            isOpen:false
		}
    }
    componentDidMount() {
         setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
    }
   
    handleInputUsers = (text) =>{
        this.setState({words:text})
         let timeout
        clearTimeout(timeout)
        timeout= setTimeout(() => {
          console.log('Has dejado de escribir en el input')
          console.log(text);
          this.getCharaptersMarvel(text) 
        clearTimeout(timeout)
        },1500)
       
    }
    getCharaptersMarvel(name){
       
        const URL = `http://gateway.marvel.com/v1/public/characters?name=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash2}`;
        fetch(URL)
            .then(results => {
                return results.json()
            })
            .then( (myJson) => this.setState({data:myJson.data.results,status:myJson.code}))
             
         

    }

	handleClose=(e)=> {
	    console.log("click close");
        // const formSearch = document.querySelector("#formSearch");
        // const founds = document.querySelector("#found");
        // formSearch.classList.remove("hidden");
        this.setState({
            data:[],
            status:0
        });
    }

	render() {
        const { loading,data } = this.state;
  
		return (
            <React.Fragment>
                <section className="App">
                    {
                    loading? (<div className={"App"}><div className={"loader"}></div></div>): 
                    <Search
                    getCharaptersMarvel={this.getCharaptersMarvel}
                    handleInputUsers={this.handleInputUsers}
                />
                    
                }
                
                        {
                            
                                data.length>0? data.map(items =>
                                (
                                    //  <Card
                                    //      path ={items.thumbnail.path}
                                    //     extension={items.thumbnail.extension}
                                    //     name={items.name}
                                    //     description={items.description}
                                    //     //  handleClose={this.handleClose}
                                    //  />
                                    <div></div>
                                    )
                                ):<div id={"found"} className={"not-founds"}> <h1>Not found </h1></div>
                           
                        }

                </section>

            </React.Fragment>
		);
	}
}

export default App;
