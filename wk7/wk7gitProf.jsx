import { useEffect, useState } from "react"


function GitProf(){
    const api = import.meta.env.VITE_API
    const [profile,setProfile] = useState({})
    useEffect(() =>{
        async function getUserData() {
            try {
                const response = await fetch(api, {
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TKN}`
                },
                });
                const data = await response.json();
                console.log(data);
                setProfile(data)
                
    
            } catch (error) {
                console.error(error);
            }   
        }
        getUserData();
    },[])




    return(
        <div style={{
                    display:'flex',
                    flexDirection:'column',
                    position:'absolute',
                    left:'450px',
                    alignItems:'center',
                    border:'1px solid grey'
        }}>
            <div style={{border:'1px solid #20b2aa',
                        backgroundColor:'#20b2aa', 
                        width:'300px',height:'150px',
                        display:'flex',
                        flexDirection:'column',
                        position:'relative',
                        alignItems:'center',
                        }}>
            </div>
                <img src={profile.avatar_url}
                    alt="profile" 
                    style={{ width:'100px',height:'100px', borderRadius:'50px',
                            position:'relative',top:'-75px' }}
                />
                <div style={{position:'' }}>
                    {profile.name}
                </div>
                <div style={{}}>
                    <h6>India</h6>
                </div>
                <div style={{display:'flex', flexDirection:'row',gap:'30px',padding:'5px',
                            borderTop:'1px solid grey', justifyContent:'space-around'}}>
                        <div style={{ paddingTop:'5px'}}>
                            {profile.public_repos}
                            <p style={{fontSize:'12px'}}>Repositories</p>
                        </div>
                        <div style={{paddingTop:'5px'}}>
                            {profile.following}
                            <p style={{fontSize:'12px'}}>Following</p>
                        </div>
                        <div style={{paddingTop:'5px'}}>
                            {profile.followers}
                            <p style={{fontSize:'12px'}}>Followers</p>
                        </div>
                </div>
                </div>
            
    )
}
export default GitProf