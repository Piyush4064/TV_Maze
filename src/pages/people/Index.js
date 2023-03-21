import React from 'react';
import { Route, Routes} from 'react-router-dom';
import People from './people/People';
import PeopleInfo from './peopleInfo/PeopleInfo';


function PeopleIndex() {
  return (
    <Routes>
        <Route path="people">
            <Route index element={<People />} />
            <Route path=":id/:name" element={<PeopleInfo />} />
        </Route>
    </Routes>
  )
}

export default PeopleIndex;