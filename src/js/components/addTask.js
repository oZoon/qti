import React, { useState } from 'react'

import ReactModal from 'react-modal';

// import PhoneInput from 'react-phone-number-input';
// import { PortalWithState } from 'react-portal';

import createPNG from '../../../static/create.png';
import closePNG from '../../../static/close.png';

const initialTask = {
    customer: '',
    supplier: '',
    supplierPhone: '',
    comments: '',
    atiCode: '',
}

const AddTask = props => {
    const [isOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>
                <img src={createPNG} className="create-item-modal-img" />
                Создать заявку
            </button>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={closeModal}
            >
                <div className="modal-screen">
                    <div className="modal-create-task">
                        <img src={closePNG} className="modal-close" onClick={closeModal} />
                        <span className="modal-create-title">Создание заявки</span>
                        <input type="text" placeholder="Название компании клиента" />
                        <input type="text" placeholder="Название компании перевозчика" />
                        <input type="text" placeholder="Контакты перевозчика" />
                        <input type="text" placeholder="Комментарии" />
                        <input type="text" placeholder="Номер в сети ATI" />
                        <button
                            className="create-item-modal"
                            onClick={() => {
                                let data = Array.from(document.getElementsByTagName(`input`), e => e.value);
                                onSaveData(data, taskList, 'new');
                            }}
                        >
                            <img src={createPNG} className="create-item-modal-img" /> Создать заявку
                        </button>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default AddTask;


/*
const AddTask = props => {

    return (
        <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, isOpen, portal }) => (
                <React.Fragment>
                    <button onClick={openPortal}>
                        <img src={createPNG} className="create-item-modal-img" />
                    Создать заявку</button>

                    {portal(
                        <div className="modal-screen">
                            <div className="modal-create-task">
                                <img src={closePNG} className="modal-close" onClick={closePortal} />
                                <span className="modal-create-title">Создание заявки</span>
                                <input type="text" placeholder="Название компании клиента" />
                                <input type="text" placeholder="Название компании перевозчика" />
                                <input type="text" placeholder="Контакты перевозчика" />
                                <input type="text" placeholder="Комментарии" />
                                <input type="text" placeholder="Номер в сети ATI" />
                                <button
                                    className="create-item-modal"
                                    onClick={() => {
                                        let data = Array.from(document.getElementsByTagName(`input`), e => e.value);
                                        onSaveData(data, taskList, 'new');
                                    }}
                                >
                                    <img src={createPNG} className="create-item-modal-img" /> Создать заявку
                            </button>
                            </div>
                        </div>
                    )}
                </React.Fragment>
            )}
        </PortalWithState>

    )
}


export default AddTask

/*
    // const [taskContent, setTaskContent] = useState(initialTask)
    // const { addUserHandler } = props
    // const [openDialog, setOpenDialog] = useState(false)
    // const [valuePhone, setValuePhone] = useState();

    // const [switchState, setSwitchState] = React.useState({
    //     addMultiple: false,
    // })

    // const handleSwitchChange = name => event => {
    //     setSwitchState({ ...switchState, [name]: event.target.checked })
    // }

    // const resetSwitch = () => {
    //     setSwitchState({ addMultiple: false })
    // }

    // const handleClickOpen = () => {
    //     setOpenDialog(true)
    // }

    // const handleClose = () => {
    //     setOpenDialog(false)
    //     resetSwitch()
    // }

    // const handleAdd = event => {
    //     addUserHandler(taskContent)
    //     setTaskContent(initialTask)
    //     switchState.addMultiple ? setOpenDialog(true) : setOpenDialog(false)
    // }

    // const handleChange = name => ({ target: { value } }) => {
    //     setTaskContent({ ...taskContent, [name]: value })
    // }



            <Tooltip title="Add">
                <IconButton aria-label="add" onClick={handleClickOpen}>
                    <AddIcon />
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Add User</DialogTitle>
                <DialogContent>
                    <DialogContentText>Demo add item to react table.</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="First Name"
                        type="text"
                        fullWidth
                        value={task.customer}
                        onChange={handleChange('customer')}
                    />
                    <TextField
                        margin="dense"
                        label="Last Name"
                        type="text"
                        fullWidth
                        value={task.supplier}
                        onChange={handleChange('supplier')}
                    />
                    <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="RU"
                        value={valuePhone ? valuePhone : ''}
                        onChange={value => {
                            // console.log(e)
                            setValuePhone(value)
                            setFilter(value)
                        }}
                    />
                    <TextField
                        margin="dense"
                        label="Status"
                        type="text"
                        fullWidth
                        value={task.comments}
                        onChange={handleChange('comments')}
                    />
                    <TextField
                        margin="dense"
                        label="Visits"
                        type="number"
                        fullWidth
                        value={task.atiCode}
                        onChange={handleChange('atiCode')}
                    />
                </DialogContent>
                <DialogActions>
                    <Tooltip title="Add multiple">
                        <Switch
                            checked={switchState.addMultiple}
                            onChange={handleSwitchChange('addMultiple')}
                            value="addMultiple"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </Tooltip>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
          </Button>
                </DialogActions>
            </Dialog>

*/
