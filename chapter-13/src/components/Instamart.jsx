import { useState } from "react"

const Section = ({title,description,isShow,setIsShow,hideShow}) => {

    // const [isShow,setIsShow] = useState(false)

    return (
        <div className="p-4 border text-xl m-3">
            <h1>{title}</h1>
            <span 
                onClick={()=>setIsShow()} 
                className="cursor-pointer"
            >
                show
            </span>
            <span
             onClick={()=>hideShow()} 
             className="mx-3 cursor-pointer"
            >hide</span>
            <p>{isShow && description}</p>
        </div>
    )
}
const Instamart = () => {

    // const [isShow,setIsShow] = useState({aboutShow:true,productShow:false,careerShow:false})

    const [isShow,setIsShow] = useState('about')

    return (
        <div className="mt-32">
            <Section title={'About instamart'}
             description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quam error aut ipsa, autem dignissimos voluptas nam veritatis impedit minima laboriosam! Illo repellat dolores maiores animi iure expedita, officiis necessitatibus optio aspernatur nesciunt nostrum libero praesentium quo enim corporis fuga voluptate itaque quaerat dolorum laborum corrupti consectetur quas! Saepe mollitia eligendi nesciunt quos quasi non provident, officiis assumenda aperiam fugit quibusdam maiores rerum molestias hic cum harum nobis iusto magnam?'}
             isShow={isShow === 'about'}
             setIsShow={()=>{setIsShow("about")}}
             hideShow={()=>{isShow === 'about' && setIsShow("")}}
            //  setIsShow={()=>{setIsShow({aboutShow:true,productShow:false,careerShow:false})}}
            //  hideShow={()=>{setIsShow({...isShow,aboutShow:false})}}
             />
            <Section
             title={'product of instamart'}
            description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quam error aut ipsa, autem dignissimos voluptas nam veritatis impedit minima laboriosam! Illo repellat dolores maiores animi iure expedita, officiis necessitatibus optio aspernatur nesciunt nostrum libero praesentium quo enim corporis fuga voluptate itaque quaerat dolorum laborum corrupti consectetur quas! Saepe mollitia eligendi nesciunt quos quasi non provident, officiis assumenda aperiam fugit quibusdam maiores rerum molestias hic cum harum nobis iusto magnam?'} 
             isShow={isShow === 'product'}
             setIsShow={()=>{setIsShow('product')}}
             hideShow={()=>{isShow === 'product' && setIsShow("")}}
            //  setIsShow={()=>{setIsShow({aboutShow:false,productShow:true,careerShow:false})}}
            //  hideShow={()=>{setIsShow({...isShow,productShow:false})}}
              />
            <Section
             title={'career of instamart'}
             description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quam error aut ipsa, autem dignissimos voluptas nam veritatis impedit minima laboriosam! Illo repellat dolores maiores animi iure expedita, officiis necessitatibus optio aspernatur nesciunt nostrum libero praesentium quo enim corporis fuga voluptate itaque quaerat dolorum laborum corrupti consectetur quas! Saepe mollitia eligendi nesciunt quos quasi non provident, officiis assumenda aperiam fugit quibusdam maiores rerum molestias hic cum harum nobis iusto magnam?'}
              isShow={isShow === 'career'}
              setIsShow={()=>{setIsShow('career')}}
              hideShow={()=>{isShow === 'career' && setIsShow("")}}
            //   setIsShow={()=>{setIsShow({aboutShow:false,productShow:false,careerShow:true})}}
            //  hideShow={()=>{setIsShow({...isShow,careerShow:false})}}
             />
            <p></p>
        </div>
    )
}

export default Instamart