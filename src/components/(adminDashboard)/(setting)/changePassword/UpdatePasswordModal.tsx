import { Button, ConfigProvider, Form, Input, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const UpdatePasswordModal = ({ open, setOpen }: TPropsType) => {
  const [form] = Form.useForm();

  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = (values) => {
    console.log("Success:", values);
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        footer={null}
        centered={true}
        onCancel={() => setOpen(false)}
        closeIcon={false}
        style={{
          minWidth: "max-content",
        }}
      >
        <div className="py-14">
          <div
            className="w-10 h-10 bg-red-500  absolute top-2 right-2 rounded-full cursor-pointer flex justify-center items-center"
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine size={18} color="#fff" />
          </div>

          {/* header */}
          <div>
            <h4 className=" text-2xl font-medium text-center">
              Update Password
            </h4>
            <p className="mt-1 text-center">Please enter your new password</p>
          </div>

          {/* form */}
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  colorBgContainer: "#F6F6F6",
                  colorText: "#505050",
                  colorTextPlaceholder: "#505050",
                },
                Form: {
                  labelColor: "#fff",
                },
              },
            }}
          >
            <Form
              form={form}
              onFinish={handleSubmit}
              layout="vertical"
              style={{
                maxWidth: 500,
                marginTop: "25px",
              }}
            >
              {/*  input  new Password*/}
              <Form.Item
                name="newPassword"
                rules={[
                  { required: true, message: "Please Enter New  Password" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Set new password"
                  className="!border-[#D3D3D3] !py-3"
                />
              </Form.Item>

              {/* input  confirm number  */}
              <Form.Item
                name="confirmPassword"
                rules={[
                  { required: true, message: "Please Re-enter new password" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Re-enter new password"
                  className="!border-[#D3D3D3] !py-3"
                />
              </Form.Item>

              <Button htmlType="submit" size="large" block>
                Update Password
              </Button>
            </Form>
          </ConfigProvider>
        </div>
      </Modal>
    </>
  );
};

export default UpdatePasswordModal;
