import { Admin } from '../api/tasks.js';
import { Business } from '../api/tasks.js';
import { Card } from '../api/tasks.js';
import { CalledNum } from '../api/tasks.js';
import { Event } from '../api/tasks.js';
import { Game } from '../api/tasks.js';
import { LastCard } from '../api/tasks.js';
import { Tablet } from '../api/tasks.js';

//  Admin --------------------------------------------------------------------
export function insertAdmin(varBusinessID, varLogin, varPassword){
    Admin.insert({
        BusinessId: varBusinessID, 
        Login: varLogin,
        Password: varPassword
    });
}

export function updateAdmin(id, varBusinessID, varLogin, varPassword){
    Admin.update(
        {_id: id},
        {
            BusinessId: varBusinessID, 
            Login: varLogin,
            Password: varPassword}
    );
}

export function deleteAdmin(id){
    Admin.remove({_id: id});
}

//  Business --------------------------------------------------------------------
export function insertBusiness(varName){
    Business.insert({
        Name: varName
    });
}

export function updateBusiness(id, varName){
    Business.update(
        {_id: id},
        {Name: varName}
    );
}

export function deleteBusiness(id){
    Business.remove({_id: id});
}

//  Card --------------------------------------------------------------------
export function insertCard(varColor, varGameID, varEventID, varBusinessID, varB1, varB2, varB3, varB4, varB5,
                    varI1, varI2, varI3, varI4, varI5, varN1, varN2, varN3, varN4, varN5, varG1, varG2, varG3, varG4, varG5,
                    varO1, varO2, varO3, varO4, varO5, varTabletID, varRefNo, varScore, varBingoWin){
    Card.insert({
        StartDate: varColor, 
        GameID: varGameID, 
        EventID: varEventID, 
        BusinessID: varBusinessID, 
        B1: varB1, 
        B2: varB2, 
        B3: varB3, 
        B4: varB4, 
        B5: varB5,
        I1: varI1, 
        I2: varI2, 
        I3: varI3, 
        I4: varI4, 
        I5: varI5, 
        N1: varN1, 
        N2: varN2, 
        N3: varN3, 
        N4: varN4, 
        N5: varN5, 
        G1: varG1, 
        G2: varG2, 
        G3: varG3, 
        G4: varG4, 
        G5: varG5,
        O1: varO1,
        O2: varO2,
        O3: varO3,
        O4: varO4,
        O5: varO5,
        TabletID: varTabletID,
        RefNo: varRefNo,
        Score: varScore,
        BingoWin: varBingoWin
    });
}

export function updateCard(id, varColor, varGameID, varEventID, varBusinessID, varB1, varB2, varB3, varB4, varB5,
                    varI1, varI2, varI3, varI4, varI5, varN1, varN2, varN3, varN4, varN5, varG1, varG2, varG3, varG4, varG5,
                    varO1, varO2, varO3, varO4, varO5, varTabletID, varRefNo, varScore, varBingoWin){
    Card.update(
        {_id: id},
        {
            StartDate: varColor, 
            GameID: varGameID, 
            EventID: varEventID, 
            BusinessID: varBusinessID, 
            B1: varB1, 
            B2: varB2, 
            B3: varB3, 
            B4: varB4, 
            B5: varB5,
            I1: varI1, 
            I2: varI2, 
            I3: varI3, 
            I4: varI4, 
            I5: varI5, 
            N1: varN1, 
            N2: varN2, 
            N3: varN3, 
            N4: varN4, 
            N5: varN5, 
            G1: varG1, 
            G2: varG2, 
            G3: varG3, 
            G4: varG4, 
            G5: varG5,
            O1: varO1,
            O2: varO2,
            O3: varO3,
            O4: varO4,
            O5: varO5,
            TabletID: varTabletID,
            RefNo: varRefNo,
            Score: varScore,
            BingoWin: varBingoWin 
    });
}

export function deleteCard(id){
    Card.remove({_id: id});
}

//  CalledNum --------------------------------------------------------------------
export function insertCalledNum(varLetter, varNumber){
    CalledNum.insert({
        StartDate: varLetter,
        Number: varNumber
    });
}

export function updateCalledNum(id, varLetter, varNumber){
    CalledNum.update(
        {_id: id},
        {
            StartDate: varLetter,
            Number: varNumber
    });
}

export function deleteCalledNum(id){
    CalledNum.remove({_id: id});
}

//  Event --------------------------------------------------------------------
export function insertEvent(varStartDate, varEndDate, varBusinessID, varAdminID){
    Event.insert({
        StartDate: varStartDate, 
        EndDate: varEndDate, 
        BusinessID: varBusinessID, 
        AdminID: varAdminID
    });
}

export function updateEvent(id, varStartDate, varEndDate, varBusinessID, varAdminID){
    Event.update(
        {_id: id},
        {
            StartDate: varStartDate, 
            EndDate: varEndDate, 
            BusinessID: varBusinessID, 
            AdminID: varAdminID
    });
}

export function deleteEvent(id){
    Event.remove({_id: id});
}

//  Game --------------------------------------------------------------------
export function insertGame(varEventID, varBusinessID, varColor){
    Game.insert({
        EventID: varEventID,
        BusinessID: varBusinessID,
        Color: varColor
    });
}

export function updateGame(id, varEventID, varBusinessID, varColor){
    Game.update(
        {_id: id},
        {
            EventID: varEventID,
            BusinessID: varBusinessID,
            Color: varColor
    });
}

export function deleteGame(id){
    Game.remove({_id: id});
}

//  LastCard ----------------------------------------------------------------
export function insertLastCard(varSerialNum){
    LastCard.insert({
        SerialNum: varSerialNum
    })
}

export function updateGame(id, varSerialNum){
    LastCard.update(
        {_id: id},
        {SerialNum: varSerialNum}
    );
}
export function deleteLastCard(id){
    LastCard.remove({_id: id});
}

//  Tablet ------------------------------------------------------------------
export function insertTablet(varTabletID){
    Tablet.insert({
        TabletID: varTabletID
    })
}

export function updateTablet(id, varTabletID){
    Tablet.update(
        {_id: id},
        {TabletID: varTabletID}
    );
}

export function deleteTablet(id){
    Tablet.remove({_id: id});
}