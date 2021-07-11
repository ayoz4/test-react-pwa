import React, { useState, useEffect } from "react";
import { Modal, Slider, Popover, message } from "antd";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import "../../styles/searchResult/FavoritesModal.scss";
import withModal from "../common/withModal";
import TextFieldGroup from "../common/TextFieldGroup";
import Button from "../common/Button";
import { addRequest, editRequest } from "../../redux/actions/userActions";
import {
  GET_REQUESTS_SUCCESS,
  REQUEST_DB,
  USER_TOKEN,
} from "../../redux/consts";
import SelectInput from "../common/SelectInput";

const content = (
  <div className="requestModal__popover">
    <p>Поиск сохранён в разделе «Избранное»</p>
    <Link to="/favorites">Перейти в избранное</Link>
  </div>
);

const sortTypes = [
  {
    key: "По дате",
    value: "date",
  },
  {
    key: "По рейтингу",
    value: "rating",
  },
  {
    key: "По релевантности",
    value: "relevance",
  },
  {
    key: "По алфавиту",
    value: "title",
  },
  {
    key: "По количеству загруженных видео",
    value: "videoCount",
  },
  {
    key: "По количествку просмотров",
    value: "viewCount ",
  },
];

function FavoritesModal({
  children,
  isVisible,
  showModal,
  closeModal,
  query = "",
  data,
  edit,
}) {
  const dispatch = useDispatch();

  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    formik.setValues({ ...formik.values, query: query });
  }, [query]);

  useEffect(() => {
    if (data) formik.setValues(data);
  }, [data]);

  const formik = useFormik({
    initialValues: {
      query: "",
      name: "",
      sortType: "relevance",
      videoQuantity: 12,
    },

    validationSchema: Yup.object().shape({
      query: Yup.string().required("Введите запрос на страницу поиска"),
      name: Yup.string().required("Название - обязательное поле"),
      sortType: Yup.string(),
      videoQuantity: Yup.number(),
    }),

    onSubmit: (values) => {
      try {
        const userData = jwt.verify(
          localStorage.getItem(USER_TOKEN),
          "secretkey"
        );

        if (edit) {
          editRequest(userData.login, values, data.name);
          message.success("Запрос был успешно изменен");
        } else {
          addRequest(userData.login, values);
          message.success("Запрос был успешно сохранен");
        }

        dispatch({
          type: GET_REQUESTS_SUCCESS,
          data: JSON.parse(localStorage.getItem(REQUEST_DB)).filter(
            (value) => value.login === userData.login
          )[0],
        });

        closeModal();

        if (!edit) setIsDone(true);
      } catch (error) {
        message.error(error.message);
      }
    },
  });

  return (
    <>
      <span onClick={showModal}>
        <Popover
          placement="bottom"
          content={content}
          visible={isDone}
          onVisibleChange={() => setIsDone(false)}
        >
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
            <b>{edit ? "Изменить запрос" : "Сохранить запрос"}</b>
          </h3>

          <TextFieldGroup
            label="Запрос"
            name="query"
            value={formik.values.query}
            handleChange={formik.handleChange}
            errors={formik.errors.query}
            touched={formik.touched.query}
            disabled
          />

          <TextFieldGroup
            label="Название"
            placeholder="Укажите название"
            name="name"
            value={formik.values.name}
            handleChange={formik.handleChange}
            errors={formik.errors.name}
            touched={formik.touched.name}
          />

          <SelectInput
            label="Сортировать по"
            name="sortType"
            value={formik.values.sortType}
            handleChange={formik.handleChange}
            options={sortTypes}
          />

          <div className="requestModal__quantity">
            <label>Максимальное количество</label>

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
          </div>

          <div className="requestModal__btnBlock">
            <Button
              style="outline"
              onClick={(e) => {
                e.preventDefault();
                closeModal();
              }}
            >
              {edit ? "Не изменять" : "Не сохранять"}
            </Button>
            <Button style="primary" type="submit">
              {edit ? "Изменить" : "Сохранить"}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default withModal(FavoritesModal);
