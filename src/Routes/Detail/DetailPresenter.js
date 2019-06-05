import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, error, loading }) => null;

DetailPresenter.propTypes = {
  result: propTypes.object,
  error: propTypes.bool.isRequired,
  loading: propTypes.string
};

export default DetailPresenter;
