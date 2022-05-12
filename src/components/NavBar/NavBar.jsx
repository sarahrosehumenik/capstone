import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service';
import './NavBar.css';
export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
    return (
        <div>
            <Link className="drawingslink" to="/orders"> Drawings</Link>
          
            <Link  className="letsdrawlink" to="/">Lets Draw</Link>
  
           <Link className="logout" to="" onClick={handleLogOut}>Log Out</Link>
            </div>
    )
}