import Nav from '../components/nav';


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
      <div className="mt-60">
         <h1 className="text-4xl text-center mx-auto text-gray-700 dark:text-gray-100">
            Welcome to the UUID Generator
         </h1>
         <p className="text-lg mt-3 text-center mx-auto text-gray-700 dark:text-gray-100">This is a Universally unique identifier, and this allow you to generate a <strong>unique</strong> ID ever than you press the button.</p>
      </div>
      <div className="my-10">
         <span className="p-0 sbtn rainbow-border-btn animated">
         <input readOnly id="uuid_generated" className="text-black" size="37"></input>
         </span>
      </div>
      <div className="flex items-center justify-between space-x-44">
         <button onClick={copy} className="sbtn gradient-border" title="Copy the UUID Generated">
            <p className=" dark:text-white ">Copy</p>
         </button>
         <button id="generate" onClick={create_UUID} className="sbtn gradient-border" role="Button" title="Generate a UUID">
            <p className=" dark:text-white ">Generate</p>
         </button>
      </div>
   </div>
</div>
      
  ) 
}