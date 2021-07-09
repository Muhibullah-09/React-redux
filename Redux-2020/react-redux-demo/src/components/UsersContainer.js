// import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { fetchUsers } from '../redux';

// function UsersContainer ({ userData, fetchUsers }) {
//   useEffect(() => {
//     fetchUsers()
//   },[fetchUsers])
//   return userData.loading ? (
//     <h2>Loading</h2>
//   ) : userData.error ? (
//     <h2>{userData.error}</h2>
//   ) : (
//     <div>
//       <h2>Users List</h2>
//       <div>
//         {userData &&
//           userData.users &&
//           userData.users.map((user , id)=> <p key={id}>{user.name}</p>)}
//       </div>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     userData: state.user
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UsersContainer)
////////////////////////////

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux';

function UsersContainer() {
  const userData = useSelector(state => state.user);
  const dispatch= useDispatch();
  // fetchUsers =  () => dispatch(fetchUsers())
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user, id) => <p key={id}>{user.name}</p>)}
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     userData: state.user
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   }
// }

export default UsersContainer;
