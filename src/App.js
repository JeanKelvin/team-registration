import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  const teams = [
    {
        name: 'Programação',
        primaryColor: '#57C278',
        secondaryColor: '#D9F7E9',
    },
    {
        name: 'Front-End',
        primaryColor: '#82CFFA',
        secondaryColor: '#E8F8FF',
    },
    {
        name: 'Data Science',
        primaryColor: '#A6D157',
        secondaryColor: '#F0F8E2',
    },
    {
        name: 'Devops',
        primaryColor: '#E06B69',
        secondaryColor: '#FDE7E8',
    },
    {
        name: 'UX e Design',
        primaryColor: '#D86EBF',
        secondaryColor: '#FAE5F5',
    },
    {
        name: 'Mobile',
        primaryColor: '#FEBA05',
        secondaryColor: '#FFF5D9',
    },
    {
        name: 'Inovação e Gestão',
        primaryColor: '#FF8A29',
        secondaryColor: '#FFEEDF',
    }
  ]

  const [employees, setEmployees] = useState([])

  const newEmployee = (employee) => {
    console.log(employee)
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} registeredEmployee={employee => newEmployee(employee)}/>
      {teams.map(team => <Team 
      key={team.name} 
      name={team.name} 
      primaryColor={team.primaryColor} 
      secondaryColor={team.secondaryColor}
      employees={employees.filter(employee => employee.team === team.name)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
