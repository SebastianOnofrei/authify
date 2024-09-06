import { NextPageContext } from "next"
 
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
export default function Home() {
  const { data: session } = useSession()
  console.log(session)

  const text1: string = "This is a full build that covers ...";
  const text2: string = "In this build we used React.js , Next.js, MongoDB, Mongoose, TypeScript, NextAuth.js, React-hook-form, Zod, Axios, Nodemailer, SMTP Server"
  // if(session) {
  //   return (
  //   <>
  //     Signed in as {session.user.email} <br/>
  //     <img src={session.user.image} alt="" />
  //     <h1>Username : {session.user.name}</h1>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  //   )
  // }
  // return (
  // <>
  //   Not signed in <br/>
  //   <button onClick={() => signIn()}>Sign in</button>
  // </>
  // )
  return(
    <div className="bg-black min-h-screen text-white flex items-center justify-center ">
      <div className="container mx-auto">
        <div className="border border-white relative flex flex-col w-full rounded-lg">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full text-right">
              <div className="py-6 px-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-md uppercase font-bold px-8 py-2 rounded-md sm:mr-2 mb-1 ease-linear transition-all duration-150" onClick={()=>signOut()}>
                  Log out
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center items-center ">
              <img src={session?.user?.image!} className="rounded-full h-40 w-40" alt={`${session?.user?.name} image`} />
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold mb-2">
                {session?.user?.name}
              </h3>
              <div className="text-sm mb-2 font-bold">
                {session?.user?.email}
              </div>
              <div className="mb-2 mt-10">
                You logged in using &nbsp;
                {/* trebe vazut ce e cu provideru asta :) probabil section 3 ultimu clip are raspunsu */}
                {/* <span className="capitalize bg-blue-400 text-white px-4 py-1 ml-2 font-bold italic text-lg rounded-md">{session?.user?.provider}</span> */}
              </div>
            </div>
            <div className="mt-10 py-10 border-t text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                  <p className="mb-4 text-sm">{text1} </p>
                  <p className="text-xs font-bold">{text2}</p>
                  <div className="mt-6 flex items-center justify-center gap-2">
                    Source code here:&nbsp;<a href="https://github.com/SebastianOnofrei/authify" target="_blank" rel="noopener noreferrer"
                    className="text-4xl">
                      <AiFillGithub/>
                    </a>
                  </div>
                  {/* my social links */}
                  <div className="flex justify-center gap-4 mt-4 pt-6 text-3xl">
                    <a href="https://github.com/SebastianOnofrei" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition ease-in-out">
                      <AiFillGithub/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition ease-in-out">
                      <FaInstagram/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition ease-in-out">
                      <FaYoutube/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition ease-in-out">
                      <FaFacebook/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition ease-in-out">
                      <FaLinkedin/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition ease-in-out">
                      <SiUdemy/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx:NextPageContext){
  const session= await getSession(ctx);

  return{
    props:{
      session
    }
  }
}
