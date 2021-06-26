import React, {useState} from 'react';
import { FlatList, View, Text } from 'react-native'; 
import { Appointment } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home(){
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
        {
            id:'1', 
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1', 
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida de md10'
        },
        {
            id:'2', 
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1', 
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida de md10'
        },
        {
            id:'3', 
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1', 
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida de md10'
        },
        {
            id:'4', 
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1', 
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida de md10'
        },
        {
            id:'5', 
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1', 
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida de md10'
        },
        {
            id:'6', 
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1', 
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida de md10'
        },
        
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }

    return(
        <Background>
            <View style = {styles.header}>
                <Profile/>
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>
            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>
          
            <ListHeader
                title="Partidas Agendadas"
                subtitle="Total 6"                
            />

            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Appointment 
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={()=> <ListDivider/>}
                style = {styles.matches}
                showsVerticalScrollIndicator ={false}
                />

            
        </Background>
    );
}