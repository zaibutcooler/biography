import torch

class Innovation(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.creativity = torch.nn.Linear(ideas, impact)

    def forward(self, x):
        return self.creativity(x)

future = Innovation()
print(future(torch.tensor([code, vision])))
