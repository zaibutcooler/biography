# from yume import Yume
# from yume.dataset import Trainset
# from yume.config import yume_small, Config

# # Initialize the dataset with the desired URL
# dataset = Trainset(dataset_url="zaibutcooler/wiki-burmese")

# # Build the dataset (download, tokenize, write binaries)
# dataset.build_dataset()

# # Optional: You can create a custom config like this
# # dummy_config = Config(...)

# # Initialize the Yume model with a pre-defined small configuration
# yume = Yume(yume_small)

# # Pretrain the model with the dataset
# yume.pretrain(dataset)

# # Optional: Fine-tune the model with the dataset
# # yume.fine_tune(dataset)

# # Optional: Upload the model to Hugging Face
# # yume.huggingface_login("your_hf_tokens")
# # yume.save_pretrained("zaibutcooler/yume")



# from .yume import Yume
# from .yume.config import yume_small

# # Optional: You can create a custom config like this
# # dummy_config = Config(...)

# # Initialize the Yume model with a pre-defined small configuration
# yume = Yume(config=yume_small)

# # Load a pretrained model from the specified path
# yume.load_pretrained('zaibutcooler/yume')

# # Generate a sample with the prompt '犬とは' (What is a dog?)
# yume.sample('犬とは')
