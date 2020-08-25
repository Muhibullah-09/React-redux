import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchUsers } from '../redux/user/userAction';


function UserContainer({ userData, FetchUsers }) {
    useEffect(() => {
        FetchUsers();
    }, []);

    return userData.loading ? (
        <h2>Loading...</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
                <div>
                    <h2>User List</h2>
                    <div>
                        {
                            userData &&
                            userData.user &&
                            userData.user.map(user => <p>{user.name}</p>)
                        }
                    </div>
                </div>

            )
}

//mapStateProps is the alternate of useSelector Hook.
const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(FetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
