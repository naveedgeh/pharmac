import { React, useState } from "react";
import {
  Form,
  Row,
  Col,
  Input,
  Select,
  Checkbox,
  Upload,
  Modal,
  message,
  InputNumber,
  Button
} from "antd";
import Card from "../common/Card";
import {
  InfoCircleOutlined,
  LoadingOutlined,
  SaveOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ImgCrop from 'antd-img-crop';
import tooltipMessage from "../../confing/tooltipMessage";
import {getBase64} from '../../function/functions';

const AddproductComponent = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [requiredMark, setRequireMarkType] = useState("required");
  const [stock, setStock] = useState(false);
  const [size,setSize]=useState('large');
  /*
  set Image State
  */
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCancel = () =>{
    setPreviewVisible(false);
  } 
 
  const onhanlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChangeImage=(image)=>{
    setImageUrl({imageUrl:image});
  }
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequireMarkType(requiredMarkValue);
  };
  const Option = Select.Option;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const handleManageStock = (e) => {
    setStock(e.target.checked);
  };
  const onChangeTextEditor = (e) => {
    console.log("Change:", e.target.value);
  };
  const uploadButton =(
      <div>
         <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
  );
  return (
    <>
      <h1>Add New Product</h1>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ requiredMarkValue: requiredMark }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
      >
        <Card>
          <Row>
            <Col span={8}>
              <Form.Item
                label="Medicine Name:"
                tooltip={tooltipMessage.productname}
                required
                rules={[
                  {
                    message: "Please Enter Medicine Name",
                  },
                ]}
                style={{ fontWeight: "700", marginRight: "5px" }}
              >
                <Input placeholder="Medicine Name" />
              </Form.Item>
              <Form.Item
                label="Barcode Type:"
                tooltip="This is a required field"
                required
                rules={[
                  {
                    message: "Please Enter Product Name",
                  },
                ]}
                style={{ fontWeight: "700", marginRight: "5px" }}
              >
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Select a Barcode type"
                  optionFilterProp="children"
                  onChange={handleChange}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
             
              <Form.Item
              tooltip="This is a required field"
              >
                <Checkbox onChange={handleManageStock}>Manage Stock?</Checkbox>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Generic Name:"
                required
                rules={[
                  {
                    message: "Please Enter Generic Name",
                  },
                ]}
                style={{ fontWeight: "700", marginRight: "5px" }}
              >
                <Input placeholder="Generic Name" />
              </Form.Item>
              <Form.Item
                label="Brand:"
                tooltip="This is a required field"
                required
                style={{ fontWeight: "700", marginRight: "5px" }}
              >
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Select a Brand"
                  optionFilterProp="children"
                  onChange={handleChange}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
              {stock?
              <Form.Item
                label="Stock"
                tooltip="Manage Stock"
                style={{ fontWeight: "700", marginRight: "5px" }}
              >
                <InputNumber placeholder="Manage Stock" style={{width:"100%"}}/>
              </Form.Item>
              :""
               }
            </Col>
            <Col span={8}>
             <Form.Item
              label="Sku:"
              >
               
               <Input placeholder="Sku"/>
             </Form.Item>
              <Form.Item
                style={{ fontWeight: "700", marginRight: "5px" }}
                label="Category:"
                tooltip="This is a required field"
                required
              >
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Select a Category"
                  optionFilterProp="children"
                  onChange={handleChange}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Unit:"
                tooltip="This is a required field"
                required
                style={{ fontWeight: "700", marginRight: "5px" }}
              >
                <Select
                  showSearch
                  style={{ width: "100%", marginRight: "5px" }}
                  placeholder="Select a Unit"
                  optionFilterProp="children"
                  onChange={handleChange}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <Form.Item
                label="Product Description"
                tooltip="This is a required field"
              >
                <TextArea
                  showCount
                  maxLength={100}
                  style={{ height: 120 }}
                  onChange={onChangeTextEditor}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Product Image" style={{ marginLeft: "20px" }}>
              <ImgCrop rotate>
              <Upload
             action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            //file={imageUrl}
            onChange={handleChangeImage}
            onPreview={onhanlePreview}
            maxCount={1}
          >
            {uploadButton}
          </Upload>
          
           </ImgCrop>
           <Modal
              visible={previewVisible}
              title="Image View"
              footer={null}
              onCancel={handleCancel}
            >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
         </Modal>
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row>
          <Col span={8}>
            <h1>Rack/Row/Position Details</h1>
          <Form.Item
          label="Example (BL0001):"
          style={{fontWeight:"700",marginRight:"5px"}}
          required
          tooltip="Please Add Rack Row Position"
          >
          <Input placeholder="Rack"/>
          <Input placeholder="Row"/>
          <Input placeholder="Position"/>
          
          </Form.Item>
          </Col>
          <Col span={8}>
          <h1>Manufacture Details</h1>
          <Form.Item
                label="Manufacture:"
                tooltip="This is a required field"
                required
                style={{ fontWeight: "700", marginRight: "5px" }}
              >
                <Select
                  showSearch
                  style={{ width: "100%", marginRight: "5px" }}
                  placeholder="Select a Unit"
                  optionFilterProp="children"
                  onChange={handleChange}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
              <Form.Item
              label="Manufacture Price"
                tooltip="This is a required field"
                required
                style={{ fontWeight: "700", marginRight: "5px" }}
              >
                <Input placeholder="Manufacture Price"/>

              </Form.Item>
          </Col>
          <Col span={8}>
            <h1>Medicine Price detail</h1>
            <Form.Item
             label="Sell Price"
             tooltip="This is a required field"
             required
             style={{ fontWeight: "700", marginRight: "5px" }}
            >
              <Input placeholder="Sell Price"/>
            </Form.Item>
          </Col>
          </Row>
        </Card>
        <div className="save-btn-mendix">
          <Button type="primary" icon={<SaveOutlined />}  size={size}>Save</Button>
          <Button type="primary" icon={<SaveOutlined />}  size={size}>Save and Add New</Button>
        </div>
      </Form>
    </>
  );
};
export default AddproductComponent;
