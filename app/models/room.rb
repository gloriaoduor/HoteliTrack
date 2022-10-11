class Room < ApplicationRecord
    belongs_to :guest
    belongs_to :admin
end
