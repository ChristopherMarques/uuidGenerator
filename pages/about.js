import Nav from '../components/nav';
import Link from 'next/link';


export default function AboutPage() {

  return (
    
    <div className="bg-white dark:bg-gray-800">
      <Nav />
            <div className="grid justify-items-center">

                <div className="mt-60">
                  <h1 className="text-4xl text-center mx-auto text-gray-800 dark:text-gray-100">
                    About This Project
                  </h1>
                  <p className="text-lg mt-3 text-center mx-auto text-gray-700 dark:text-gray-100">
                    A universally unique identifier (UUID) is a 128-bit number used to identify information in computer systems. The term globally unique identifier (GUID) is also used, typically in software created by Microsoft.[1]

                    When generated according to the standard methods, UUIDs are, for practical purposes, unique. Their uniqueness does not depend on a central registration authority or coordination between the parties generating them, unlike most other numbering schemes. While the probability that a UUID will be duplicated is not zero, it is close enough to zero to be negligible.

                    Thus, anyone can create a UUID and use it to identify something with near certainty that the identifier does not duplicate one that has already been, or will be, created to identify something else. Information labeled with UUIDs by independent parties can therefore be later combined into a single database or transmitted on the same channel, with a negligible probability of duplication.

                    Adoption of UUIDs is widespread, with many computing platforms providing support for generating them and for parsing their textual representation.
                  </p>
                </div>
              
            </div>
            
          
      </div>
      
  ) 
}