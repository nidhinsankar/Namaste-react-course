import UserContext from "../../utils/UserContext"
import Header from "../Header"


Test('Header should render in page',()=>{
    const header = render(
        <UserContext.Provider>
            <Header/>
        </UserContext.Provider>
    )
}) 