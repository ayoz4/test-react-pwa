import React from "react";
import { Modal, Slider, Popover } from "antd";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import * as Yup from "yup";

import "../../styles/searchResult/FavoritesModal.scss";
import withModal from "../common/withModal";
import TextFieldGroup from "../common/TextFieldGroup";
import Button from "../common/Button";
import { addRequest } from "../../redux/actions/userActions";
import { USER_TOKEN } from "../../redux/consts";

const content = (
  <div className="requestModal__popover">
    <p>Поиск сохранён в разделе «Избранное»</p>
    <Link to="/favorites">Перейти в избранное</Link>
  </div>
);

function FavoritesModal({ children, isVisible, showModal, closeModal }) {
  const formik = useFormik({
    initialValues: {
      query: "",
      name: "",
      sortType: "",
      videoQuantity: 0,
    },

    validationSchema: Yup.object().shape({
      query: Yup.string().required(),
      name: Yup.string().required(),
      sortType: Yup.string(),
      videoQuantity: Yup.number(),
    }),

    onSubmit: (values) => {
      const userData = jwt.verify(
        localStorage.getItem(USER_TOKEN),
        "secretkey"
      );

      console.log(userData);
      addRequest(userData.login, values);
    },
  });

  return (
    <>
      <span onClick={showModal}>
        <Popover placement="bottom" content={content}>
          {children}
        </Popover>
      </span>
      <Modal
        visible={isVisible}
        onCancel={closeModal}
        footer={null}
        width={510}
        closable={false}
        bodyStyle={{ padding: "36px 40px" }}
        maskStyle={{ background: "#75C7FF", opacity: "0.8" }}
      >
        <form className="requestModal" onSubmit={formik.handleSubmit}>
          <h3>
            <b>Сохранить запрос</b>
          </h3>

          <TextFieldGroup
            label="Запрос"
            placeholder="тест"
            name="query"
            value={formik.values.query}
            handleChange={formik.handleChange}
          />

          <TextFieldGroup
            label="Название"
            placeholder="Укажите название"
            name="name"
            value={formik.values.name}
            handleChange={formik.handleChange}
          />

          <TextFieldGroup
            label="Сортировать по"
            placeholder="Без сортировки"
            name="sortType"
            value={formik.values.sortType}
            handleChange={formik.handleChange}
          />

          <div className="requestModal__sliderBlock">
            <Slider
              min={0}
              max={50}
              value={formik.values.videoQuantity}
              onChange={(e) => {
                formik.handleChange({
                  target: {
                    name: "videoQuantity",
                    value: e,
                  },
                });
              }}
            />
            <TextFieldGroup
              name="videoQuantity"
              value={formik.values.videoQuantity}
              handleChange={formik.handleChange}
            />
          </div>

          <div className="requestModal__btnBlock">
            <Button
              style="outline"
              onClick={(e) => {
                e.preventDefault();
                closeModal();
              }}
            >
              Не сохранять
            </Button>
            <Button style="primary" type="submit">
              Сохранить
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default withModal(FavoritesModal);
