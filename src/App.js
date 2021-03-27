import { useState } from 'react';
import Header from './components/Header.js';
import Users from './components/Users.js';
import Footer from './components/Footer.js';

function App() {

	const [userId, setId] = useState(0);

	const [users, setUsers] = useState([]);

	const [isLoading, setLoading] = useState(false); 

	const generateUser = () => {
			let newUser = {};
			setLoading(true);
			fetch(`https://randomuser.me/api`)
			.then(
				response => response.ok ? response.json() : new Error()
			)
			.then(
				data => {
					let user = data.results[0];
					newUser.id = userId;
					newUser.name = `${user.name.first} ${user.name.last}`;
					newUser.age = user.dob.age;
					newUser.dateOfBirth = user.dob.date;
					newUser.gender = user.gender;
					newUser.password = user.login.password;
					newUser.picture = user.picture.medium;
					newUser.email = user.email;
				}
			)
			.then(
				() => {
					setUsers([newUser, ...users]);
					setId(userId + 1);
					setLoading(false);
				}
			)
			.catch(
				error => { console.log(`[ERROR]: ${error}`) }
			)
	}

	const deleteUser = (id) => {
		console.log(id);
		setUsers(users.filter((user) => user.id !== id))
	};

	return (
		<div className="container">
			<Header 
				title="Random User Generator 2.0"
				onClick={generateUser}
				buttonText={
					isLoading ?
					(
						"Loading..."
					) : (
						"Generate"
					)
				}
				isDisabled={isLoading} />
			{
				users.length > 0 ? 
				( <Users 
					users={users}
					onDelete={deleteUser} />
				) : (
					'No Users Generated Yet'
				)
			}
			<Footer />
		</div>
	);
}

export default App;
