import React from 'react';
import { timestampToDate } from '../lib/utils';

function ModalDetailTask(props) {
    const { data } = props;
    const time = timestampToDate(data.taskDate);
    let result =
        (
            <div className="modal-detail-task">
                <span className="modal-detail-title">Содержимое заявки</span>
                <span className="model-detail-list-data">
                <span className="modal-detail-data">Номер заявки: {data.taskNumber}</span>
                <span className="modal-detail-data">Дата заявки: {time}</span>
                <span className="modal-detail-data">Клиент: {data.customerName}</span>
                <span className="modal-detail-data">Перевозчик: {data.supplyerName}</span>
                <span className="modal-detail-data">Контакты перевозчика: {data.supplyerPhone}</span>
                <span className="">Комментарии: {data.comments}</span>
                <span className="modal-detail-data">ATI: {data.atiCode}</span>
                </span>
            </div>
        )
    return result;
}

export default ModalDetailTask;
