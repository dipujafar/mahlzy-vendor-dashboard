import { Button, ConfigProvider, Form, Input, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import ForgetPasswordModal from "./ForgetPasswordModal";
import { useState } from "react";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const ChangePasswordModal = ({ open, setOpen }: TPropsType) => {
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);

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
              Change Password
            </h4>
            <p className="mt-1 text-center">
              Your password must be 8-10 character long.
            </p>
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
                  labelColor: "var(--color-primary-gray)",
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
              {/*  input old password */}
              <Form.Item
                name="currentPassword"
                rules={[
                  { required: true, message: "Please Enter Old Password" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Current Password "
                  className="!border-[#D3D3D3] !py-3"
                />
              </Form.Item>

              {/*  input  new Password*/}
              <Form.Item
                name="newPassword"
                rules={[
                  { required: true, message: "Please Enter New Password " },
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
                  { required: true, message: "Please confirm new password" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="New Confirm Password"
                  className="!border-[#D3D3D3] !py-3"
                />
              </Form.Item>

              <p
                onClick={() => {
                  setOpen(false);
                  setOpenModal(true);
                }}
                className="mb-5 font-medium cursor-pointer text-main-color italic "
              >
                Forget password?
              </p>

              <Button htmlType="submit" size="large" block>
                Update Password
              </Button>
            </Form>
          </ConfigProvider>
        </div>
      </Modal>
      {/* forget password Modal */}
      <ForgetPasswordModal
        open={openModal}
        setOpen={setOpenModal}
      ></ForgetPasswordModal>
    </>
  );
};

export default ChangePasswordModal;
