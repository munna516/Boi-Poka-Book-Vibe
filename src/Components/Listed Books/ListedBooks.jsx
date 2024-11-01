import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utilities/AddToDB';

const ListedBooks = () => {
    const allbooks = useLoaderData()

    useEffect(() => {
        const storedBooks = getStoreReadList()
    
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center my-6'>Listed Books</h1>
            <Tabs>
                <TabList>
                    <Tab>Books I Read</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;