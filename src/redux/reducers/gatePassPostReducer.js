import {
  CREATE_GATE_PASS_POST_REQUEST,
  CREATE_GATE_PASS_POST_SUCCESS,
  CREATE_GATE_PASS_POST_FAIL,
  UPDATE_GATE_PASS_POST_REQUEST,
  UPDATE_GATE_PASS_POST_SUCCESS,
  UPDATE_GATE_PASS_POST_FAIL,
  DELETE_GATE_PASS_POST_REQUEST,
  DELETE_GATE_PASS_POST_SUCCESS,
  DELETE_GATE_PASS_POST_FAIL,
  CLEAR_ERRORS,
  ALL_GATE_PASS_POST_REQUEST,
  ALL_GATE_PASS_POST_SUCCESS,
  ALL_GATE_PASS_POST_FAIL,
  SINGLE_GATE_PASS_POST_REQUEST,
  SINGLE_GATE_PASS_POST_SUCCESS,
  SINGLE_GATE_PASS_POST_FAIL,
} from "../constants/gatePassPostConstant";
const initialState = {
  jobPosts: [],
  singleJobPost: null,
  error: null,
  loading: false,
};

export const jobPostReducer = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_GATE_PASS_POST_REQUEST:
    case UPDATE_GATE_PASS_POST_REQUEST:
    case DELETE_GATE_PASS_POST_REQUEST:
    case ALL_GATE_PASS_POST_REQUEST:
    case SINGLE_GATE_PASS_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_GATE_PASS_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        jobPosts: [...state.jobPosts, action.payload],
      };


    case UPDATE_GATE_PASS_POST_SUCCESS:
      const updatedJobPosts = state.jobPosts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

      return {
        ...state,
        loading: false,
        error: null,
        jobPosts: updatedJobPosts,
      };


    case DELETE_GATE_PASS_POST_SUCCESS:
      const filteredJobPosts = state.jobPosts.filter(
        (post) => post._id !== action.payload
      );
      return {
        ...state,
        loading: false,
        error: null,
        jobPosts: filteredJobPosts,
      };

    case ALL_GATE_PASS_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        jobPosts: action.payload,
      };

    case SINGLE_GATE_PASS_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        singleJobPost: action.payload,
      };


    case CREATE_GATE_PASS_POST_FAIL:
    case UPDATE_GATE_PASS_POST_FAIL:
    case DELETE_GATE_PASS_POST_FAIL:
    case ALL_GATE_PASS_POST_FAIL:
    case SINGLE_GATE_PASS_POST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};
