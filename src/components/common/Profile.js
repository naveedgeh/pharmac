import { Button } from 'antd';
import {React} from 'react';

const Profile=()=>{
        return(
            <div className='company-profile-modal'>
                <div className='compnay-logo'><h1>Naveed Ahmad</h1></div>
                <div className='profile-btn-mendix'>
                   <Button>Profile</Button>
                   <Button>Sign Out</Button>
                </div>
            </div>
        )
}
export default Profile;