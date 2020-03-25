import controlComponent from './RelationControl';
import previewComponent from './RelationPreview';

const Widget = (opts = {}) => ({
  name: 'relation',
  controlComponent,
  previewComponent,
  ...opts,
});

export const NetlifyCmsWidgetHugoRelation = { Widget, controlComponent, previewComponent };
export default NetlifyCmsWidgetHugoRelation;
