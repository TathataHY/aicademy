-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "model" "AIModel";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "currentModel" "AIModel" NOT NULL DEFAULT 'gpt_4';
