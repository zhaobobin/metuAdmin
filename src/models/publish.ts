import { Model, Effect } from 'dva';
import { Reducer } from 'redux';
import { PublishType, IPhotoPublishForm, IArticlePublishForm, IImageSchema } from '@/types/PublishTypes';

export interface IPublishState {
  modalVisible: boolean;
  publishType: PublishType;
  photoFormValues: IPhotoPublishForm;
  photoPickerImages: IImageSchema[]; // 选择相册图片 暂存
  articleFormValues: IArticlePublishForm;
  formValidate: boolean; // 表单校验通过
}

interface PublishModel extends Model {
  namespace: string;
  state: IPublishState;
  effects: {
    publishPhoto: Effect;
    publishArticle: Effect;
  };
  reducers: {
    setState: Reducer<IPublishState>;
    savePhotoFormValues: Reducer<IPublishState>;
    resetPhotoFormValues: Reducer<IPublishState>;
    saveArticleFormValues: Reducer<IPublishState>;
    resetArticleFormValues: Reducer<IPublishState>;
  };
}

const initialPhotoFormValues = {
  title: '',
  description: '',
  tags: '',
  images: [],
  thumb: undefined
}

const initialArticleFormValues = {
  title: '',
  description: '',
  tags: '',
  content: ''
}

export const initialState = {
  modalVisible: true,
  publishType: null,
  photoFormValues: initialPhotoFormValues,
  photoPickerImages: [],
  articleFormValues: initialArticleFormValues,
  formValidate: false
}

const publishModel: PublishModel = {
  namespace: 'publish',

  state: initialState,

  effects: {
    *publishPhoto({ payload, callback }, { call }) {

    },
    *publishArticle({ payload, callback }, { call }) {

    }
  },

  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    savePhotoFormValues(state = initialState, { payload }) {
      return {
        ...state,
        photoFormValues: {
          ...state.photoFormValues,
          ...payload
        }
      };
    },
    resetPhotoFormValues(state = initialState, _) {
      return {
        ...state,
        photoFormValues: initialPhotoFormValues,
        photoPickerImages: []
      };
    },
    saveArticleFormValues(state = initialState, { payload }) {
      return {
        ...state,
        articleFormValues: {
          ...state.articleFormValues,
          ...payload
        }
      };
    },
    resetArticleFormValues(state = initialState, _) {
      return {
        ...state,
        articleFormValues: initialArticleFormValues
      };
    },
  },
};

export default publishModel;
