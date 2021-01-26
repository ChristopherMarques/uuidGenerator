import Nav from '../components/nav';
import Image from 'next/image';


export default function IndexPage() {

const create_UUID = () => {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    document.getElementById("uuid_generated").value = uuid;
  }
  
 const copy = () => {
        if(document.getElementById("uuid_generated").value == "Copied!" || document.getElementById("uuid_generated").value == "" || document.getElementById("uuid_generated").value == "Please, generate a UUID to Copy!"){
          document.getElementById("uuid_generated").value = "Please, generate a UUID to Copy!";
        }else{
          document.getElementById("uuid_generated").select();
          document.execCommand("copy");
          document.getElementById("uuid_generated").value = "Copied!";
        }
  }
  return (
    
    <div className="bg-white dark:bg-gray-800">
      <Nav />
            <div className="grid justify-items-center">

               <div className="text-center mt-5 pt-10 mb-0 my-0 p-0">
                  <Image src="/logo_uuid.png" width="346" height="255"/>
                </div>

                <div className="mt-1">
                  <h1 className="text-4xl text-center mx-auto text-gray-700 dark:text-gray-100">
                    Welcome to the UUID Generator
                  </h1>
                  <p className="text-lg mt-3 text-center mx-auto text-gray-700 dark:text-gray-100">This is a Universally unique identifier, and this allow you to generate a <strong>unique</strong> ID ever than you press the button.</p>
                </div>

                <div className="my-10">
                    <span className="p-0 bg-none shadow-none sbtn rainbow-border-btn animated">
                      <input readOnly id="uuid_generated" className="text-black border-none" size="37"></input>
                    </span>
                </div>

                <div className="flex items-center justify-between space-x-15">
                  <button onClick={copy} className="sbtn colored-on-hover-btn purple-btn mx-36"><p className=" dark:text-white ">Copy</p></button>
                  <button id="generate" onClick={create_UUID} className="sbtn gradient-btn purple-btn mx-36" role="Button" title="Generate a UUID">Generate</button>
                </div>
              
            </div>
            
          
      </div>
      
  ) 
}